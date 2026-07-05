/*
# Remove all anon write policies from bookings and blog_posts

Bookings are now created exclusively via the `create-booking` Edge Function
(service_role key, bypasses RLS). Blog posts are managed via service_role only.
Anon clients retain SELECT access only.

1. Changes
- Drop anon_insert_bookings (INSERT, WITH CHECK true) — replaced by Edge Function
- Drop any remaining anon write policies on bookings and blog_posts as a safety net
2. Security
- anon + authenticated: SELECT only on both tables
- All writes go through service_role (Edge Function or admin backend)
*/

DROP POLICY IF EXISTS "anon_insert_bookings"   ON bookings;
DROP POLICY IF EXISTS "anon_update_bookings"   ON bookings;
DROP POLICY IF EXISTS "anon_delete_bookings"   ON bookings;

DROP POLICY IF EXISTS "anon_insert_blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "anon_update_blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "anon_delete_blog_posts" ON blog_posts;
