import csv
import pymongo


def readfile(filename):
    data = []
    with open(filename, 'rU') as data_file1: 
        reader = csv.reader(data_file1, delimiter='\t', dialect=csv.excel_tab)
        # we have a header row\t skip one:
        reader.next()

        overflow_categories = ['']*3

        for row in reader:
            if row[1]:
                overflow_categories[0] = row[1]
                overflow_categories[1] = ''
                overflow_categories[2] = ''
            if row[2]:
                overflow_categories[1] = row[2]
                overflow_categories[2] = ''
            if row[3]:
                overflow_categories[2] = row[3]

            row[1] = overflow_categories[0]
            row[2] = overflow_categories[1]
            row[3] = overflow_categories[2]

            data.append(row)
    return data


def row_to_dicts(row):
    """ Turn a row from the TSV file in to something we can use to insert
    in to mongodb we are not yet concerned about the database itself at
    this point just turning things in to a dict.
    """

    category_data = []
    description_data = []

    for cat in [row[1], row[2], row[3], row[4]]:
        if cat:
            description_data.append(cat)

    common_data = {
        'category': row[0],
        'description': description_data,
        'expense_units': row[5],
        'purchase_units': row[20]
    }

    for year in range(14):
        actual_year = year + 2001
        # build individual copies in order to add in the now-diverging data
        annual_data = common_data.copy()
        annual_data['year'] = actual_year
        annual_data['expense'] = row[year+6]
        annual_data['purchase'] = row[year+6+15]
        category_data.append(annual_data)

    return category_data


def record_to_mongo(db, record_to_insert):
    return db.expenditure.insert(record_to_insert)

if __name__ == '__main__':


    rows = readfile('expenditure_purchase_q5.tsv')
    
    all_data_now = []
    for row in rows:
        all_data_now.append(row_to_dicts(row))

    # we now have all our datas in the pythons, time to mongo.

    conn = pymongo.MongoClient(host='localhost')
    expenditure = conn.expenditure

    for row in all_data_now:
        for entry in row:
            entry.update({'quintile': 5})
        record_to_mongo(expenditure, row)