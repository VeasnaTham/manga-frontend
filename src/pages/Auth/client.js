import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zhjptocgefquncnuxtos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoanB0b2NnZWZxdW5jbnV4dG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4ODkwODcsImV4cCI6MjAxNTQ2NTA4N30.wwF5WOvda-kKCQZfVeFn9gOEp7EspPAP0jvAfVboJf4'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
