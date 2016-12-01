using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Demo.Models
{
    public class food
    {
        [BsonId]
        public Object _id { get; set; }
        public string category { get; set; }
        public string purchase { get; set; }
        public int quintile { get; set; }
        public string expense_units { get; set; }
        public double? expense { get; set; }
        public string purchase_units { get; set; }
        public int year { get; set ; }
        public List<string> description { get; set; }
        public double? purchase_percentage_change { get; set; }
        public double? expense_percentage_change { get; set; }
        public double? ppu_percentage_change { get; set; }
        public double? ppu { get; set; }
    }
   
}