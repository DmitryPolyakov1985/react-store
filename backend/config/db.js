import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGUSER, PGPASSWORD, PGHOST, PGDATABASE } = process.env;

// creates a SQL connection using our env variables
export const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require`
);

// this SQL function we export is used as a tagged template literal, which allows us to write SQL queries safely

// postgresql://neondb_owner:npg_s4xE5hFKYbRX@ep-soft-hill-aa016sp8-pooler.westus3.azure.neon.tech/neondb?sslmode=require&channel_binding=require
