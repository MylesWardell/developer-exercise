import React, { useState, useEffect } from "react";
import "./App.css";
import * as superagent from "superagent";
import Table from './Table'

function App() {
  const [data, updateData] = useState([]);
  const [error, setError] = useState(false)
  // const [filter, setFilter] = useState("");

  useEffect(() => {
    superagent.get("http://localhost:3001/FarmersMarket/").end((error, res) => {
      if (error) {
        setError(true)
        throw error
      }
      updateData(JSON.parse(res.text));
    });
  }, []);



  const columns = [
    {
      title: 'FMID',
      key: 'FMID',
    },
    {
      title: 'Market Name',
      key: 'MarketName',
    },
    {
      title: 'Website',
      key: 'Website',
    },
    {
      title: 'Facebook',
      key: 'Facebook',
    },
    {
      title: 'Twitter',
      key: 'Twitter',
    },
    {
      title: 'Youtube',
      key: 'Youtube',
    },
    {
      title: 'Other Media',
      key: 'OtherMedia',
    },
    {
      title: 'Street',
      key: 'street',
    },
    {
      title: 'County',
      key: 'County',
    },
    {
      title: 'State',
      key: 'State',
    },
    {
      title: 'ZIP Code',
      key: 'zip'
    },
    {
      title: 'Season 1 Date',
      key: 'Season1Date'
    },
    {
      title: 'Season 1 Time',
      key: 'Season1Time'
    },
    {
      title: 'Season 2 Date',
      key: 'Season2Date'
    },
    {
      title: 'Season 2 Time',
      key: 'Season2Time'
    },
    {
      title: 'Season 3 Date',
      key: 'Season3Date'
    },
    {
      title: 'Season 3 Time',
      key: 'Season3Time'
    },
    {
      title: 'Season 4 Date',
      key: 'Season4Date'
    },
    {
      title: 'Season 4 Time',
      key: 'Season4Time'
    },
    {
      title: 'X',
      key: 'x'
    },
    {
      title: 'Y',
      key: 'y'
    },
    {
      title: 'Location',
      key: 'Location'
    },
    {
      title: 'Credit',
      key: 'Credit'
    },
    {
      title: 'WIC',
      key: 'WIC'
    },
    {
      title: 'WIC Cash',
      key: 'WICcash'
    },
    {
      title: 'SFMNP',
      key: 'SFMNP'
    },
    {
      title: 'SNAP',
      key: 'SNAP'
    },
    {
      title: 'Organic',
      key: 'Organic'
    },
    {
      title: 'Baked Goods',
      key: 'Bakedgoods'
    },
    {
      title: 'Cheese',
      key: 'Cheese'
    },
    {
      title: 'Crafts',
      key: 'Crafts'
    },
    {
      title: 'Flowers',
      key: 'Flowers'
    },
    {
      title: 'Eggs',
      key: 'Eggs'
    },
    {
      title: 'Seafood',
      key: 'Seafood'
    },
    {
      title: 'Herbs',
      key: 'Herbs'
    },
    {
      title: 'Vegetables',
      key: 'Vegetables'
    },
    {
      title: 'Honey',
      key: 'Honey'
    },
    {
      title: 'Jams',
      key: 'Jams'
    },
    {
      title: 'Maple',
      key: 'Maple'
    },
    {
      title: 'Meat',
      key: 'Meat'
    },
    {
      title: 'Nursery',
      key: 'Nursery'
    },
    {
      title: 'Nuts',
      key: 'Nuts'
    },
    {
      title: 'Plants',
      key: 'Plants'
    },
    {
      title: 'Poultry',
      key: 'Poultry'
    },
    {
      title: 'Prepared',
      key: 'Prepared'
    },
    {
      title: 'Soap',
      key: 'Soap'
    },
    {
      title: 'Trees',
      key: 'Trees'
    },
    {
      title: 'Wine',
      key: 'Wine'
    },
    {
      title: 'Coffee',
      key: 'Coffee'
    },
    {
      title: 'Beans',
      key: 'Beans'
    },
    {
      title: 'Fruits',
      key: 'Fruits'
    },
    {
      title: 'Grains',
      key: 'Grains'
    },
    {
      title: 'Juices',
      key: 'Juices'
    },
    {
      title: 'Mushrooms',
      key: 'Mushrooms'
    },
    {
      title: 'Pet Food',
      key: 'PetFood'
    },
    {
      title: 'Tofu',
      key: 'Tofu'
    },
    {
      title: 'Wild Harvested',
      key: 'WildHarvested'
    },
    {
      title: 'Last Updated',
      key: 'updateTime'
    }
  ]

  let table
  if (data.length) {
    table = <Table columns={columns} data={data} />
  } else {
    if (error) {
      table = <div className="error">An Error Has Occured</div>
    } else {
      table = <div className="Loading">Loading...</div>
    }
  }


  return (
    <div className="app">
      <div className="filter">
        <input
          placeholder={"Search name"}
        />
      </div>

      <div className="table-container">
        {table}
      </div>
    </div>
  );
}

export default App;
