/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mzvvjdck5j58qnh")

  // remove
  collection.schema.removeField("8vgpskhb")

  return dao.saveCollection(collection)
})
