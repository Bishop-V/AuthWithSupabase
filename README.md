# Set up

## 1. .env set up 

Add .env file to the project folder (sent on D2L)

## 2. Launch app

run with ```npm run start```

## 2. Test login

Enter credentials to test:

Email: ashleyhearn@gmail.com

password: 111111


# Supabase setup notes

## Supabase table 

```
create table public.profiles (
  id uuid not null default auth.uid (),
  email text null,
  created_at timestamp with time zone null default now(),
  constraint profiles_pkey primary key (id),
  constraint profiles_id_fkey foreign KEY (id) references auth.users (id) on delete CASCADE
) TABLESPACE pg_default;
```



