cat of image file give binary data of that file
for getting whole content of file we need to go inside a directory and then

- (cat \*) (all file insidse current directory)
- cat \*\* (all file inside currect directory and directory inside directory)

through find command

find . -type f -exec (command) {} \;
(\;) -> for ending the exec command; (in the end);
(.) => from current directory
command can be cat or ls whatever

if a specific find want than after f we need to mention -name "expression of file pattern"

find . -type f -name "\*.html" => this is only also fine
find if any file want inside a directory than instead of (.) give (./dir_name)
(-print0 and -xargs -0) for handling spaces

awk can also use as grep but it take only regular exp means in (//);
