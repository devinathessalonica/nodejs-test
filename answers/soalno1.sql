select u.ID, u.UserName, uParent.Username as ParentUserName 
from `user` u 
LEFT JOIN `user` uParent on u.Parent = uParent.id