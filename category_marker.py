import pymongo

def main():
    conn = pymongo.MongoClient(host='localhost')
    db = conn.expenditure

    bad_cats = ["501", "601", "402", "403", "1102", "1201", "1605", "1608", "3102", "3107", "3601", "4603", "4604", "4605", "4607", "5101", "7801", "9403", "9506", "10602", "10702", "12304", "13802", "13901", "14805", "15301", "15505", "15506", "15504", "19801", "19901", "16702", "19201", "19501", "19602", "19603", "20401", "24101", "25701", "25801", "29503", "30901", "31001", "32001", "32101", "32201", "35501" "38501"]

    for cat in bad_cats:
        db.expenditure.update_many({"category": cat}, {"$set": {"ignored": True}})

    db.expenditure.update_many({"ignored": {"$exists": False}}, {"$set": {"ignored": False}})

if __name__ == '__main__':
    main()