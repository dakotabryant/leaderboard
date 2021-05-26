# Leaderboards
Supports getting leaderboards.

# Get a leaderboard

**Request**:

`GET` `http://localhost:4000/api/v1/leaderboards/:name`

Parameters:

Name       | Type   | Required | Description
-----------|--------|----------|------------
name | string | Yes      | The name of the leaderboard you'd like to receive. Choices are 'racers' or 'items'.

**Example command:**

```bash
curl -i  \
  -H "Content-Type: application/json" \
 http://localhost:4000/api/v1/leaderboards/items
```

**Response**:

```json
HTTP 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

[   
    { "position:": 1, "name": "Star", "power_level": 110},
    { "position:": 2, "name": "Blue Shell", "power_level": 100},
    { "position:": 3, "name": "Horn", "power_level": 80},
    { "position:": 4, "name": "Red Shell", "power_level": 60},
    { "position:": 5, "name": "Green Shell", "power_level": 50},
    { "position:": 6, "name": "Banana", "power_level": 50},
]
```
