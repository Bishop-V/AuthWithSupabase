.env set up
EXPO_PUBLIC_SUPABASE_URL=https://kddsqbfrnvpnqllrxtck.supabase.co
EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_o1gzHfzE46zu54LgLBkArA_vKAeZy8L

one premade account 
Email: ashleyhearn@gmail.com
password: 111111


supabase table 

create table public.profiles (
  id uuid not null default auth.uid (),
  email text null,
  created_at timestamp with time zone null default now(),
  constraint profiles_pkey primary key (id),
  constraint profiles_id_fkey foreign KEY (id) references auth.users (id) on delete CASCADE
) TABLESPACE pg_default;


run with npm run start
