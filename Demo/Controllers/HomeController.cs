﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Demo.Models;
using MongoDB.Driver;
using Demo.Properties;
using System.Configuration;

namespace Demo.Controllers
{
    public class HomeController : Controller
    {
        public MongoDatabase MongoDatabase;
        public MongoCollection Collections;
        // GET: Home
        public HomeController() {
            var client = new MongoClient(ConfigurationManager.AppSettings["connectionString"]);
            MongoServer server = client.GetServer();
            MongoDatabase db = server.GetDatabase("test");
            MongoCollection<food> Food = db.GetCollection<food>("expenditure");
            long a = Food.Count();
            foreach (food food in Food.FindAll())
            {
                string id = food._id.ToString();
                double category = food.category;
                int q = food.quintile;
                string y = food.year.ToString();
            }
        }
        public ActionResult Index()
        {
            Collections = MongoDatabase.GetCollection("col");
            long count = Collections.Count();
            return null;
        }
        
        [HttpPost]
        public ActionResult charts(DropDownList ddl) {
            if (ddl != null)
                return Json("Success");
            else
                return Json("Error");
        }
    }
}