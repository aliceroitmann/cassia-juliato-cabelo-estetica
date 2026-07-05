/*
# Create bookings table (single-tenant, no auth)

1. New Tables
- `bookings`
  - `id` (uuid, primary key)
  - `service` (text) — the selected service
  - `appointment_date` (date) — selected date
  - `appointment_time` (text) — selected time slot
  - `stylist` (text) — chosen stylist/therapist
  - `client_name` (text) — client full name
  - `client_phone` (text) — client phone number
  - `client_email` (text) — client email
  - `notes` (text) — optional special requests
  - `status` (text, default 'pending') — booking status
  - `created_at` (timestamptz)

2. Security
- Enable RLS on `bookings`.
- Allow anon + authenticated SELECT only.
- INSERT is handled via the `create-booking` Edge Function (service_role).
- UPDATE and DELETE are restricted to service_role (admin/backend only).
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service text NOT NULL,
  appointment_date date NOT NULL,
  appointment_time text NOT NULL,
  stylist text NOT NULL,
  client_name text NOT NULL,
  client_phone text NOT NULL,
  client_email text NOT NULL,
  notes text DEFAULT '',
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_bookings" ON bookings;
CREATE POLICY "anon_select_bookings" ON bookings FOR SELECT
TO anon, authenticated USING (true);

-- INSERT handled by create-booking Edge Function (service_role).
-- UPDATE and DELETE restricted to service_role (admin/backend only).
