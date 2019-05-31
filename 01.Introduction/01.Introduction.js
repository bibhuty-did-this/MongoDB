/*
Document Database:
    + A record in MongoDB is a document, which is a data structure composed of field and value pairs.
    + MongoDB documents are similar to JSON objects.
    + The value fields may include other documents, arrays and array of documents.
*/

/*
Advantages of using documents are:
    + Documents(i.e. Objects) corresponds to native data types in many programming language.
    + Embedded documents and arrays reduce need for expensive joins.
    + Dynamic schema supports fluent polymorphism.
*/

/*
    Key features;
        + High Performance
            MongoDB provides high performance data persistence. In particular:
                ~ Support for embedded data models reduces I/O activity on database system.
                ~ Indexes support faster queries and can include keys from embedded documents and arrays.
        + Rich Query Language
            MongoDB supports a rich query language to support read and write operations (CRUD) as well as:
                ~ Data Aggregation
                ~ Text Search and Geospatial Queries.
        + High Availability
            MongoDB’s replication facility, called replica set, provides:
                ~ automatic failover and
                ~ data redundancy.
            A replica set is a group of MongoDB servers that maintain the same data set, providing redundancy and increasing data availability.

        + Horizontal Scalability
            MongoDB provides horizontal scalability as part of its core functionality:
                ~ Sharding distributes data across a cluster of machines.
                ~ Starting in 3.4, MongoDB supports creating zones of data based on the shard key. In a balanced cluster, MongoDB directs reads and writes covered by a zone only to those shards inside the zone. See the Zones manual page for more information.
        
        + Support for Multiple Storage Engines
            MongoDB supports multiple storage engines:
                ~ WiredTiger Storage Engine (including support for Encryption at Rest)
                ~ In-Memory Storage Engine
                ~ MMAPv1 Storage Engine (Deprecated in MongoDB 4.0)
*/







