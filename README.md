# Set up

## .env set up 

Add .env file to the project folder (sent on D2L)

# Test

## 1. Launch app

run with ```npm run start```

## 2. Test login

Press "Log in"

Enter credentials to test validation:

Email: ashleyhearn@gmail.com

password: 111111

Press "Log out"

## 3. Sign up

Press "Sign up"

Enter desired credentials. 

After creating account you will be logged in directly, and may log out and login again to test the database.

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



