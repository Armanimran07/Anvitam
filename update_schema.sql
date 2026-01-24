-- Add JSONB columns to store complex data structures
ALTER TABLE projects ADD COLUMN IF NOT EXISTS gallery jsonb;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS specs jsonb;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS story jsonb;

-- Add 3D Model URL column
ALTER TABLE projects ADD COLUMN IF NOT EXISTS model_url text;

-- Add Array/JSONB columns for Blog details
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS toc text[];
