-- Revert ofrigo:1.init from pg

BEGIN;

DROP TABLE IF EXISTS account, message, category, ingredient, recipe, quantity, step, tag, account_has_ingredient, recipe_has_ingredient, recipe_has_tag;

COMMIT;
