import pymongo

def main():
    conn = pymongo.MongoClient(host='localhost')
    coll = conn.expenditure.expenditure_v3
    

    # first things first, reset all to not ignored:
    coll.update_many({}, {"$set":{"ignored": False}})

    ignorable_categories = [
        "501",
        "601",
    ]
    #{'category': {"$not": {"$in": ["601", "501"]}}},
    coll.update_many({"category": {"$in": ignorable_categories}},
                               {"$set": {"ignored": True}})

    coll.update_many({"category": {"$not": {"$in": ignorable_categories}}},
                               {"$set": {"ignored": False}})

if __name__ == '__main__':
    main()
