using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Demo.Models
{
    public class Elasticity
    {
        public double? elasticity { get; set; }
        public string category { get; set; }
        public int quintile { get; set; }
        public int number { get; set; }
    }
}