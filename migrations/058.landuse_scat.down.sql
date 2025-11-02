ALTER TABLE buildings DROP COLUMN IF EXISTS current_landuse_order_scat;
ALTER TABLE buildings DROP COLUMN IF EXISTS current_landuse_group_scat;

DROP TABLE IF EXISTS reference_tables.landuse_classifications_scat;
DROP TABLE IF EXISTS reference_tables.buildings_landuse_order_scat;
DROP TABLE IF EXISTS reference_tables.buildings_landuse_group_scat;

ALTER TABLE buildings DROP COLUMN IF EXISTS current_landuse_scat_source;

ALTER TABLE buildings DROP COLUMN IF EXISTS current_landuse_scat_source_detail;

ALTER TABLE buildings DROP COLUMN IF EXISTS current_landuse_scat_link;
