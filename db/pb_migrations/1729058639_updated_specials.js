/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mzvvjdck5j58qnh")

  // remove
  collection.schema.removeField("8vgpskhb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u5jxzgfm",
    "name": "category",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mzvvjdck5j58qnh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8vgpskhb",
    "name": "category",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("u5jxzgfm")

  return dao.saveCollection(collection)
})
