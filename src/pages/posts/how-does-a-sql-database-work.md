---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Cool from '../../components/Author.astro'
  import '../../styles/blog.css'
title: How Does a SQL Database Work? (Part 1)
description: An exploration of the PostgreSQL source code
publishDate: 2022 July 17
draft: false
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

Think of it like this: There's a popular book at the public library, and so the library decides to purchase 20 copies of the book so that nobody has to wait, or at least wait too long, to read the book. Someone will borrow the book, read it, and then return it to the library.

Database connection pooling works similarly. An application will open up, say, 20 connections and have them ready in a pool. If a thread in the application needs to access the database connection, it will borrow that connection, use it, and then return it to the pool.

Note: This is not a feature of the database itself, but rather a pattern that applications will use to improve performance. While applications will pool connections, databases often spawn a new process per connection that's made.

## Parsing

After making a connection, the client will typically want to send over a query to the database to retrieve or modify data.

The database will convert this text input into something it understands by putting it through a _lexer_ and then a _parser_.

The lexer's responsibility is to take the text and convert known keywords into _tokens_, to be used by the parser.

The parser takes the output of the lexer and transforms it into a _parse tree_. This is where the query's grammar is checked to ensure that it's valid. The parser doesn't care if the query makes any sense (semantics) -- it just cares if the query follows the correct structure (syntax). For example, a parser would find a `SELECT` query valid that queried by a column that doesn't exist on that table.

After parsing, we know that the query is syntactically valid. Then the parser takes the parse tree and transforms it into a _query tree_. It looks similar to a parse tree, but it figures out what tables are being referenced, ensuring that it's all valid.

That's it for part 1! When we get to part 2, we'll show more of the querying process.
