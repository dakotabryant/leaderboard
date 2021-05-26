# Racers
Supports getting racer profiles and shelling racers to slow them down.

## Get a racer's Profile

`GET` `https://localhost:4000/api/v1/racers/:name`

Parameters:

Name       | Type   | Required | Description
-----------|--------|----------|------------
name | string | Yes      | The slugified name of the racer.

**Example command:** 

```bash
curl -i  \
  -H "Content-Type: application/json" \
 http://localhost:4000/api/v1/racers/Mario
```

**Response:**

```json
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8

{
  "name": "Mario",
  "speed": 0.6,
  "acceleration": 0.5,
  "weight_class": "medium",
  "handling": 0.5,
  "traction": 0.5
}
```

## Shell a racer

**Request:**

`POST` `https://localhost:4000/api/v1/racers/:name/shell`

Parameters:

Name       | Type   | Required | Description
-----------|--------|----------|------------
name | string | Yes      | The slugified name of the racer you'd like to shell. 

**Example command:** 

```bash
curl -i  \
  -X POST \
  -H "Content-Type: application/json" \
 http://localhost:4000/api/v1/racers/Mario/shell
```

**Response:**

```json
HTTP 200 OK
Allow: GET, POST, HEAD, OPTIONS
Cache-Control: public, no-cache
Content-Type: application/json
Vary: Accept
```