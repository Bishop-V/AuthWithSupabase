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
  id uuid not null references auth.users on delete cascade default auth.uid,
  email text,
  created_at timestamptz default now(),
  primary key (id)
);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using ( auth.uid() = id );

create policy "Users can update own profile"
  on public.profiles for update
  using ( auth.uid() = id );


create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, email, created_at)
  values (
    new.id,
    new.email,
    new.created_at
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

```


