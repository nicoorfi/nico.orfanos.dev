---
title: Elasticsearch shards rules
description: Rules for picking the correct shards number for your Elasticsearch indices.
date: 2021-08-30T00:00:00.000Z
---

About some time ago, I took a deep look into Elasticsearch shards trying to simplify
the **shards** word. 

After some digging into this topic I came up with some basic
rules for the **Elasticsearch shards** question.

## Logical Rule 

If we assume that Elasticsearch is a search engine, then we can say that shards are smaller
self-contained search engines within Elasticsearch.

With that said it's logical to think that the **more** search engines / shards working at the same time **the faster** the results.

But there are move thing to take into consideration when choosing the amount of shards for your index.

From the [Elasticsearch Blog](https://www.elastic.co/blog/how-many-shards-should-i-have-in-my-elasticsearch-cluster):
>In Elasticsearch, each query is executed in a single thread per shard. Multiple shards can however be processed in parallel, as can multiple queries and aggregations against the same shard.

> Querying lots of small shards will make the processing per shard faster, but as many more tasks need to be queued up and processed in sequence, it is not necessarily going to be faster than querying a smaller number of larger shards. Having lots of small shards can also reduce the query throughput if there are multiple concurrent queries.

## Heap Rule

Without going in details, let's just say that your heap size should be 50% of your available memory,
which is beneficial for the **Search** and **Indexing** operations, and the other 50% should remain available
for caching.

**The number of shards should be below 20 per GB heap.**

For example if your node has 8 GB of memory you should set your heap size to 4 GB. And the total number
of your shards shouldn't be more than 80. 

But if you have 2 GB of memory on your machine, and a heap size of 1 GB.
In this case having **20 indices** with **1 primary shard** would be the maximum recommended shards / heap size, and the same goes to **10 indices** with **2 primary shards**. 

## Size rule 

Depending on your index size,

**It's preffered to keep your shard size between a few GB and 40 GB.**

Considering that each shard uses some amount of CPU and memory, having too many small shards can place needless
strain on the hardware. 

Keeping in mind that the on-disk size of an index is around 10% larger than it's source data.

**So in a case where we have some data around 60 GB in an index.**

  We should specify **2 primary shards** when creating our index, because we want each shard to be
  **30 GB** and also we have 10 GB available for the 10% indexing overhead.


**In another case where our data is around 2 GB.**
  
  It's good to have 1 primary shard and avoid spliting our hardware resources between small shards.


**And if our data is 40 GB.**

  It's preffered to have 2 primary shards around 20 GB than having 1 shard which will exceeed the 40 GB rule.

## Deeper

You can find deeper and more detailed explanations about shard in the following links.

[Elasticsearch Blog](https://www.elastic.co/blog/how-many-shards-should-i-have-in-my-elasticsearch-cluster)

[AWS Docs](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/sizing-domains.html)

[Opster](https://opster.com/elasticsearch-glossary/elasticsearch-heap-size-usage/)