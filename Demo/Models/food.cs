using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Demo.Models
{
    public class food
    {
        public Object _id { get; set; }
        public double category { get; set; }
        public double purchase { get; set; }
        public int quintile { get; set; }
        public string expense_units { get; set; }
        public string purchase_units { get; set; }
        public int year { get; set; }
        public string expense { get; set; }
        public Array description { get; set; }

    }
}