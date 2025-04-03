import { Column, Index, PrimaryColumn, Table } from 'src/sql-tools';

@Index({ name: 'idx_geodata_places_alternate_names', expression: 'f_unaccent("alternateNames") gin_trgm_ops' })
@Index({ name: 'idx_geodata_places_admin1_name', expression: 'f_unaccent("admin1Name") gin_trgm_ops' })
@Index({ name: 'idx_geodata_places_admin2_name', expression: 'f_unaccent("admin2Name") gin_trgm_ops' })
@Index({ name: 'idx_geodata_places_name', expression: 'f_unaccent("name") gin_trgm_ops' })
@Index({ name: 'idx_geodata_places_gist_earthcoord', expression: 'll_to_earth_public(latitude, longitude)' })
@Table({ name: 'idx_geodata_places', synchronize: false })
export class GeodataPlacesTable {
  @PrimaryColumn({ type: 'integer' })
  id!: number;

  @Column({ type: 'character varying', length: 200 })
  name!: string;

  @Column({ type: 'double precision' })
  longitude!: number;

  @Column({ type: 'double precision' })
  latitude!: number;

  @Column({ type: 'character', length: 2 })
  countryCode!: string;

  @Column({ type: 'character varying', length: 20, nullable: true })
  admin1Code!: string;

  @Column({ type: 'character varying', length: 80, nullable: true })
  admin2Code!: string;

  @Column({ type: 'character varying', nullable: true })
  admin1Name!: string;

  @Column({ type: 'character varying', nullable: true })
  admin2Name!: string;

  @Column({ type: 'character varying', nullable: true })
  alternateNames!: string;

  @Column({ type: 'date' })
  modificationDate!: Date;
}

@Table({ name: 'geodata_places_tmp', synchronize: false })
export class GeodataPlacesTempEntity {
  @PrimaryColumn({ type: 'integer' })
  id!: number;

  @Column({ type: 'character varying', length: 200 })
  name!: string;

  @Column({ type: 'double precision' })
  longitude!: number;

  @Column({ type: 'double precision' })
  latitude!: number;

  @Column({ type: 'character', length: 2 })
  countryCode!: string;

  @Column({ type: 'character varying', length: 20, nullable: true })
  admin1Code!: string;

  @Column({ type: 'character varying', length: 80, nullable: true })
  admin2Code!: string;

  @Column({ type: 'character varying', nullable: true })
  admin1Name!: string;

  @Column({ type: 'character varying', nullable: true })
  admin2Name!: string;

  @Column({ type: 'character varying', nullable: true })
  alternateNames!: string;

  @Column({ type: 'date' })
  modificationDate!: Date;
}
