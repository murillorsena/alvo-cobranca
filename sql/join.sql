SELECT s."name", r."name"
FROM "store" AS s
JOIN "representative" AS r
ON s."id" = r."store_id";
