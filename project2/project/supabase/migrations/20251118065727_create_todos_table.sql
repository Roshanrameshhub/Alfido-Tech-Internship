/*
  # Create todos table

  1. New Tables
    - `todos`
      - `id` (uuid, primary key) - Unique identifier for each todo
      - `user_id` (uuid) - Reference to the user who owns the todo
      - `title` (text) - The todo task description
      - `completed` (boolean) - Whether the task is completed or not
      - `created_at` (timestamptz) - When the todo was created
      
  2. Security
    - Enable RLS on `todos` table
    - Add policy for authenticated users to view their own todos
    - Add policy for authenticated users to insert their own todos
    - Add policy for authenticated users to update their own todos
    - Add policy for authenticated users to delete their own todos
    
  3. Important Notes
    - All operations are restricted to authenticated users only
    - Users can only access their own todos (filtered by user_id)
    - Default value for completed is false
    - Timestamps are automatically set on creation
*/

CREATE TABLE IF NOT EXISTS todos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  title text NOT NULL,
  completed boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE todos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own todos"
  ON todos
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own todos"
  ON todos
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own todos"
  ON todos
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own todos"
  ON todos
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS todos_user_id_idx ON todos(user_id);
CREATE INDEX IF NOT EXISTS todos_created_at_idx ON todos(created_at DESC);