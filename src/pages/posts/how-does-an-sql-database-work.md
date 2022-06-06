---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Cool from '../../components/Author.astro'
  import '../../styles/blog.css'
title: How Does an SQL Database Work?
description: An exploration of the PostgreSQL source code
publishDate: 2022 June 1
draft: true
---

_Much of this material is a distillation of the [PostgreSQL documentation](https://www.postgresql.org/docs/14/overview.html), which you should check out._

# SQL Databases are **Complicated**

There's a lot of moving parts, but at the end of the day, it's broken into this pipeline of steps:

1. A client application establishes a connection to the server.
2. The _parser_ takes a look at the text output of the query sent by the client and transforms it into a **query tree**.
3. A _rewrite engine_ looks at the query tree that was just produced and looks at any rules in the `pg_rules` system table that it needs to apply. It rewrites the query accordingly. Notably, this is how queries to SQL views are transformed.
4. The _planner_ takes the rewritten query and tries to estimate the cheapest way to query for the data requested by the client. At the end of this process, we get an optimized (hopefully!) plan.
5. In the final process, the _executor_ takes the plan from the previous stage, retrieves the data, filters and sorts appropriately, and then hands the data back to be given to the client.

## Connection Pooling

The most notable aspect of establishing a connection is that many applications that use a SQL database will implement **connection pooling**.

But what is connection pooling, and why does it matter?

Let's imagine a situation without conneciton pooling. If you want to query a database, you'll open a network connection, it will process your query, and then you'll close that network connection. If you've got a large amount of traffic hitting the SQL database, then the process of opening and closing connections will eventually become a performance problem.

Instead, you'll want to _pool_ your connections, which will allow you to reuse your open connections for later queries.
