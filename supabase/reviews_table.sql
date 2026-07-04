create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  rating smallint not null check (rating between 1 and 5),
  comment text not null,
  created_at timestamptz not null default now()
);

alter table public.reviews enable row level security;

create policy "Public can read reviews"
  on public.reviews for select
  to anon
  using (true);

create policy "Public can submit reviews"
  on public.reviews for insert
  to anon
  with check (true);
