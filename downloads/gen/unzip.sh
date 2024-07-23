cd "/Users/ag-m1/Documents/CMAMA/p5mirror-ambikajo/downloads/../p5projects"
#
echo unzip 1 "jumpy-cutie copy-8oAhE_5a4"
rm -rf "./jumpy-cutie copy-8oAhE_5a4"
mkdir "./jumpy-cutie copy-8oAhE_5a4"
pushd "./jumpy-cutie copy-8oAhE_5a4" > /dev/null
unzip -q "../../downloads/zips/jumpy-cutie copy-8oAhE_5a4"
popd > /dev/null
#
echo unzip 2 "jumpy-cutie-gnrbVdABX"
rm -rf "./jumpy-cutie-gnrbVdABX"
mkdir "./jumpy-cutie-gnrbVdABX"
pushd "./jumpy-cutie-gnrbVdABX" > /dev/null
unzip -q "../../downloads/zips/jumpy-cutie-gnrbVdABX"
popd > /dev/null

cd ..
# remove redundant p5.js p5.sound.min.js
rm -f p5projects/*/p5.*
# sync last_updatedAt.txt
cd downloads/json
if [ -e pending_updatedAt.txt ]; then
  rm -f last_updatedAt.txt
  mv pending_updatedAt.txt last_updatedAt.txt
fi