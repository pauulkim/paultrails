json.array! @search do |s|
  if s.class == Park
    json.extract! s, :id, :name
    json.type "parks"
  else 
    json.extract! s, :id, :name
    json.type "trail"
  end
end