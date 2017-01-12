# The Scripts Directory

This directory contains a collection of scripts used prior to the actual web application, a brief summary of each file follows:

## Data Processing/Marshalling Scripts
| Order | File Name  | TL;DR of contents |
|---| --------- | ------------------ |
|1  | `parse.py`             | Parses a manually generated TSV and dumps in to mongo in usable format  |
|2  | `adjuster.py`             | Adjust data in-db for inflation |
|3  | `cal_percentage_ppu.py`   | Calculate percentage changes of purchases and quantities in-db |
|4  | `cal_ppu_percentage_change.py` | Calculate percentage percentage changes in-db |
|5  | `category_marker.py` | Mark certain (manually selected) categories as 'ignored' |
|6  | `description_separator.py` | Separates descriptions in to separated keys |
