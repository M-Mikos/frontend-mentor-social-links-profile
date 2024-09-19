/* Script for populating social buttons - Server Side Generation
 * This srtipt has to be run before deploying to production.
 *
 * Steps:
 * 1. Read and parse content from "data/social-profiles.json"
 * 2. Read button template markup
 * 2. Read index.html markup from "src/index.html" as text value
 * 2. Declare output string
 * 3. For every data entry, append social button markup to output string with correct data
 * 4. Replace "%social-buttons&" placeholder with output string in index.html markup
 * 5. Save updated markup as index.html
 */
