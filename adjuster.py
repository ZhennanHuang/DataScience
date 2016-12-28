#!/bin/python

import csv
import sys

import pymongo


def adjust(db, adjustment_table):
    for year in xrange(2000,2016):
        print("adjusting: %s by %s" % (year, adjustment_table[year]))
        db.expenditure_v3.update_many(
            {'year': year,
             'expense': {'$ne': None}},
              {'$mul': {'expense': adjustment_table[year]}
            }
        )
            


def _read_adjustment_table(filename):
    multiplier_for_year = {}
    with open(filename, 'r') as datafile:
        reader = csv.reader(datafile)
        # we have a header row\t skip one:
        reader.next()
        for row in reader:
            multiplier_for_year[int(row[0])] = float(row[2])
    return multiplier_for_year


if __name__ == '__main__':
    # connect to the mongos
    conn = pymongo.MongoClient(host='localhost')
    db = conn.expenditure
    adjustment_table = _read_adjustment_table(sys.argv[1])

    adjust(db, adjustment_table)