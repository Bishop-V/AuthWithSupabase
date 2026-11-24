.env set up

Add .env file to the project folder (sent on D2L)

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
