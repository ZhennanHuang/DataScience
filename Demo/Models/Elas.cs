using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Demo.Models
{
    public class Elas
    {
        [BsonId]
        public Object _id { get; set; }
        public int id { get; set; }
        public double? Elasticity { get; set; }
        public string Category { get; set; }
        public string Subcategory { get; set; }
        public string Subsubcategory { get; set; }
        public string Subsubsubcategory { get; set; }
        public int Quintile { get; set; }
    }
}