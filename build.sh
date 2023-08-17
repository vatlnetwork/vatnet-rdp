commitMessage="update"

while getopts m: flag
do
  case "${flag}" in
    m) commitMessage=${OPTARG};;
  esac
done

rm rdp-client.zip
zip rdp-client.zip * -r
git add .
git commit -m "${commitMessage}"
git push