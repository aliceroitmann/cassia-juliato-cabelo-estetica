import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const body = await req.json();
    const { service, appointment_date, appointment_time, stylist, client_name, client_phone, client_email, notes } = body;

    if (!service || !appointment_date || !appointment_time || !stylist || !client_name || !client_phone || !client_email) {
      return new Response(
        JSON.stringify({ error: "Campos obrigatórios ausentes." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const { data, error } = await supabase.from("bookings").insert([{
      service,
      appointment_date,
      appointment_time,
      stylist,
      client_name,
      client_phone,
      client_email,
      notes: notes ?? "",
      status: "pending",
    }]).select("id").single();

    if (error) throw error;

    return new Response(
      JSON.stringify({ id: data.id }),
      { status: 201, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Erro interno." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
