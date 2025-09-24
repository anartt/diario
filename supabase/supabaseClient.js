import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ghnqqxhpobjleihxwbmy.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdobnFxeGhwb2JqbGVpaHh3Ym15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMTIxMjIsImV4cCI6MjA3MTg4ODEyMn0.FsLg95INU3jUFF__0mEmk3QouHbnCJgTd2mb3KUW-Lo";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);