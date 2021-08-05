json.array! @search do |s|
  if s.class == Park
    json.extract! s, :id, :name
    json.type "park"
  else 
    json.extract! s, :id, :name
    json.type "trail"
  end
end