-- Fix overly permissive RLS policies on blog_posts and bookings.
-- This is a no-auth public app: anon may SELECT and INSERT only.
-- UPDATE and DELETE must be restricted to service_role (admin use only).

-- blog_posts: remove unrestricted anon INSERT/UPDATE/DELETE
DROP POLICY IF EXISTS "anon_insert_blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "anon_update_blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "anon_delete_blog_posts" ON blog_posts;

-- bookings: remove unrestricted anon UPDATE/DELETE; keep INSERT for public booking form
DROP POLICY IF EXISTS "anon_update_bookings" ON bookings;
DROP POLICY IF EXISTS "anon_delete_bookings" ON bookings;
