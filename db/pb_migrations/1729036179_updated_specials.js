/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mzvvjdck5j58qnh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ntlrx7ye",
    "name": "active",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mzvvjdck5j58qnh")

  // remove
  collection.schema.removeField("ntlrx7ye")

  return dao.saveCollection(collection)
})
