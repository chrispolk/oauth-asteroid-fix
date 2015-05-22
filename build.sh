git submodule update --init     # This fetches the submodule repo at the commit...
cd meteor                       # ...it was when the parent (we) committed.
git fetch; git checkout master  # Actually update the submodule.
cd -
cp meteor/packages/oauth/{end_of_popup_response.html} .
patch end_of_popup_response.html end_of_popup_response.patch