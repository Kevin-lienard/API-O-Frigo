-- Revert ofrigo:2.insert from pg

BEGIN;

TRUNCATE account, message, category, ingredient, recipe, quantity, step, tag, account_has_ingredient, recipe_has_ingredient, recipe_has_tag RESTART IDENTITY;

COMMIT;
