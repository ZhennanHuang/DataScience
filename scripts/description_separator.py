import sys

import pymongo


def separate_descriptions(collection):
    for record in collection.find():

        description_array = record['description']
        newfields = dict()

        newfields['category'] = description_array[0]
        try:
            newfields['subcategory'] = description_array[1]
        except IndexError:
            newfields['subcategory'] = None

        try:
            newfields['subsubcategory'] = description_array[2]
        except IndexError:
            newfields['subsubcategory'] = None

        try:
            newfields['subsubsubcategory'] = description_array[3]
        except IndexError:
            newfields['subsubsubcategory'] = None

        collection.update_one({'_id': record['_id']}, {"$set": newfields})



if __name__ == '__main__':
    """ Technically this should be done in the parse phase, but it's a hassle
    to re-import all the data after changing the 'schema', so we just separate
    things out afterwards.
    """
    
    connstring = sys.argv[1]
    db_name = sys.argv[2]  # don't know why pymongo doesn't seem to like the 
                           # connection string
    collection_name = sys.argv[3]
    
    conn = pymongo.MongoClient(connstring)
    
    collection = conn.get_database(
        db_name
    ).get_collection(
        collection_name
    )

    # ready to go ahead with separation
    separate_descriptions(collection)