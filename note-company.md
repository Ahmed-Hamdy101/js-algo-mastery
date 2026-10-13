Large companies use **Lambda architecture** when they need to process large amounts of data in two ways:

1. **Batch layer**: processes all historical data accurately.
2. **Speed layer**: processes new data immediately.
3. **Serving layer**: combines both results for queries.

Example: an online store wants to show sales analytics.

- The **database** stores data permanently.
- A **cache** provides frequently requested results quickly.
- Lambda architecture processes incoming events in real time while also regularly recalculating complete historical results.

They do **not** use Lambda architecture instead of a cache and database. Lambda architecture usually uses databases, caches, queues, and processing systems together.

```text
new events
    |
    +--> speed processing ------> recent results
    |
    +--> batch storage ----------> complete historical results
                                      |
                           serving/query layer
```

The reason is that a cache alone can lose data or become stale, while a database alone may be too slow for real-time analytics at massive scale.

For a small application, Lambda architecture is usually unnecessary. A database plus a cache is simpler and often sufficient.