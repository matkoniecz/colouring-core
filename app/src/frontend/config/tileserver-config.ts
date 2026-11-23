/**
 * This file defines all the valid tileset names that can be obtained from the tilserver.
 * Adjust the values here if modifying the list of styles in the tileserver.
 */

export type BuildingMapTileset =
    'date_year' |
    'facade_year' |
    'size_height' |
    'size_storeys_core' |
    'size_storeys_attic' |
    'age_amalgamated' |
    'age_inferred' |
    'heritage_age_data' |
    'expert_age_data' |
    'digital_twin_model_age_data' |
    'cladding_year' |
    'extension_year' |
    'retrofit_year' |
    'size_total_floors' |
    'size_storeys_basement' |
    'size_floor_area_ground' |
    'construction_core_material' |
    'construction_structural_system' |
    'construction_foundation' |
    'construction_roof_shape' |
    'construction_roof_covering' |
    'construction_material_window_frame' |
    'location' |
    'count_crowdsourced' |
    'is_domestic' |
    'use_building_origin' |
    'use_building_current' |
    'basement_type' |
    'basement_percentage' |
    'basement_use' |
    'ground_storey_use' |
    'upper_storeys_use' |
    'use_number_residential_units' |
    'use_number_businesses' |
    'building_status' |
    'last_renovation' |
    'construction_system_type' |
    'size_roof_shape' |
    'building_owner' |
    'likes' |
    'typology_likes' |
    'community_local_significance_total' |
    'community_expected_planning_application_total' |
    'community_in_public_ownership' |
    'community_building_hominess_avg' |
    'community_building_coherence_avg' |
    'community_building_fascination_avg' |
    'community_building_neuroaesthetic_avg' |
    'community_streetscape_hominess_avg' |
    'community_streetscape_coherence_avg' |
    'community_streetscape_fascination_avg' |
    'community_streetscape_neuroaesthetic_avg' |
    'planning_applications_status_all' |
    'planning_applications_status_recent' |
    'planning_applications_status_very_recent' |
    'planning_combined' |
    'planning_world_heritage_buildings' |
    'sust_dec' |
    'building_attachment_form' |
    'landuse' |
    'original_landuse' |
    'dynamics_demolished_count' |
    'team' |
    'architectural_style' |
    'thermal_stress_objective_count' |
    'thermal_stress_subjective_count' |
    'rain_flood_historic_incidents_count' |
    'facade_window_percentage' |
    'roof_colour' |
    'facade_colour' |
    'terrain_connection_yesno' |
    'number_mapped_building_features' |
    'disaster_severity' |
    'team_known_designer' |
    'survival_status' |
    'typology_classification' |
    'typology_style_period' |
    'typology_dynamic_classification' |
    'context_back_garden' |
    'context_street_width' |
    'context_walkability_index' |
    'designer_awards' |
    'energy_solar' |
    'energy_green_roof' |
    'sust_aggregate_estimate_epc';

export type SpecialMapTileset = 'base_light' | 'base_night' | 'base_night_outlines' | 'highlight' | 'number_labels' | 'base_boroughs';

export type MapTileset = BuildingMapTileset | SpecialMapTileset;
