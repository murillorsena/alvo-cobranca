SELECT s."name", r."name"
FROM "store" AS s
JOIN "representative" AS r
ON s."id" = r."store_id";

SELECT s."name", e."type", e."amount", e."due_date"
FROM "expense" AS e
JOIN "shopping" AS s
ON e."shopping_code" = s."code";

SELECT s."name", st."name", e."description", e."amount", e."due_date"
FROM "expense" AS e
JOIN "shopping" AS s ON e."shopping_code" = s."code"
JOIN "store" AS st ON e."store_code" = st."code";

SELECT st."code", st."name", s."name", e."amount", e."due_date"
FROM "expense" AS e
JOIN "shopping" AS s ON e."shopping_code" = s."code"
JOIN "store" AS st ON e."store_code" = st."code";

SELECT
    st."code", 
    SUM(e."amount") AS "amount", 
    MIN(e."due_date") AS "biggest_delay"
FROM "expense" AS e
JOIN "shopping" AS s ON e."shopping_code" = s."code"
JOIN "store" AS st ON e."store_code" = st."code"
GROUP BY st."code";

SELECT st."code", st."name" AS "store", s."name" AS "shopping", SUM(e."amount") AS "amount", MIN(e."due_date") AS "biggest_delay"
FROM "expense" AS e
JOIN "shopping" AS s ON e."shopping_code" = s."code"
JOIN "store" AS st ON e."store_code" = st."code"
GROUP BY st."code", st."name", s."name";
