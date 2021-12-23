---
title: Term was completly eliminated by analyzer
description: Why you need to place the stop filter after the synonym filter.
date: 2021-09-03T00:00:00.000Z
---

```
PUT http://localhost:9200/my_index
```

Wrong 
```json
{
	"settings": {
		"number_of_shards": 1,
		"number_of_replicas": 2,
		"analysis": {
			"analyzer": {
				"custom_analyzer": {
					"tokenizer": "standard",
					"char_filter": [],
					"filter": [
						"custom_stopwords",
						"custom_synonyms"
					]
				}
			},
			"filter": {
				"custom_stopwords": {
					"stopwords": [
						"doing"
					],
					"type": "stop"
				},
				"custom_synonyms": {
					"synonyms": [
						"act, action, doing, execution"
					],
					"expand": true,
					"type": "synonym"
				}
			}
		}
	}
}
```

Response
```json
{
  "error": {
    "root_cause": [
      {
        "type": "illegal_argument_exception",
        "reason": "failed to build synonyms"
      }
    ],
    "type": "illegal_argument_exception",
    "reason": "failed to build synonyms",
    "caused_by": {
      "type": "parse_exception",
      "reason": "Invalid synonym rule at line 1",
      "caused_by": {
        "type": "illegal_argument_exception",
        "reason": "term: doing was completely eliminated by analyzer"
      }
    }
  },
  "status": 400
}
```

Correct
```json
{
	"settings": {
		"number_of_shards": 1,
		"number_of_replicas": 2,
		"analysis": {
			"analyzer": {
				"custom_analyzer": {
					"tokenizer": "standard",
					"char_filter": [],
					"filter": [
						"custom_synonyms",
						"custom_stopwords"
					]
				}
			},
			"filter": {
				"custom_stopwords": {
					"stopwords": [
						"doing"
					],
					"type": "stop"
				},
				"custom_synonyms": {
					"synonyms": [
						"act, action, doing, execution"
					],
					"expand": true,
					"type": "synonym"
				}
			}
		}
	}
}
```

Response
```json
{
  "acknowledged": true,
  "shards_acknowledged": true,
  "index": "322"
}
```