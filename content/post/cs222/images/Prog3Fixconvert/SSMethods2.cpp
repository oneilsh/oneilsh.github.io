//Infix to Prefix and Postfix Converter
//Shawn O'Neil
#include <iostream>
#include <string>
#include "StringStack.h"
using namespace std;


StringStack::StringStack()
	{
	head = new Node;
	head->setnext(NULL);
	}

StringStack::~StringStack()
	{
	delete head;
	}

void StringStack::push(string s)
	{
	Node *newnode = new Node;
	newnode->setnext(head->getnext());
	head->setnext(newnode);
	newnode->setdata(s);
	}

string StringStack::pop()
	{
	if(head->getnext() != NULL)
		{
		Node *n = head->getnext();
		head->setnext(n->getnext());
		string ret = n->getdata();
		n->setnext(NULL);
		delete n;
		return ret;
		}
	else
		{
		string error = "tried to pop from an empty list";
		return error;
		}
	}

bool StringStack::empty()
	{
	return (head->getnext() == NULL);
	}

Node::Node()
	{

	}

Node::~Node()
	{
	delete next;
	}

void Node::setnext(Node *n)
	{
	next = n;
	}

Node *Node::getnext()
	{
	return next;
	}

void Node::setdata(string s)
	{
	data = s;
	}

string Node::getdata()
	{
	return data;
	}

string peek(StringStack &st);
bool leftFirst(string a, string b);
int rank(string c);
string postfix(string infix);
string prefix(string infix);


//Main Methods, sends the infix expression on to be converted
int main()
	{
	string infix;
	cout << "Enter an infix expression (ctrl-z to quit): ";
	while(getline(cin, infix), cin)
		{
		cout << "Postfix: " << postfix(infix) << endl;
		cout << "Prefix: " << prefix(infix) << endl << endl;
		cout << "Enter an infix expression (ctrl-z to quit): ";
		}
	}


//Converts an infix expression to a postfix expression using two string stacks
string postfix(string infix)
	{
	StringStack postfix;
	StringStack operators;

	for(int i = 0; i < (int)infix.length(); i++)
		{
		char newchar = infix[i];
		if('0' <= newchar && newchar <= '9')
			{
			postfix.push((string)""+newchar);
			}
		else
			{
			string thechar = (string)""+newchar;
			if(operators.empty())
				operators.push(thechar);
			else if(thechar == "(")
				operators.push(thechar);
			else if(thechar == ")")
				{
				while(peek(operators) != "(")
					{
					string a = postfix.pop();
					string b = postfix.pop();
					string c = operators.pop();
					string ba = b+a;
					string bac = ba+c;
					postfix.push(bac);
					}
				operators.pop();
				}
			else
				{
				while(leftFirst(peek(operators), thechar))
					{
					string a = postfix.pop();
					string b = postfix.pop();
					string c = operators.pop();
					string ba = b+a;
					string bac = ba+c;
					postfix.push(bac);
					}
				operators.push(thechar);
				}
			}
		}
	while(!operators.empty())
		{
		string a = postfix.pop();
		string b = postfix.pop();
		string c = operators.pop();
		string ba = b+a;
		string bac = ba+c;
		postfix.push(bac);
		}
	return postfix.pop();
	}


//converts an infix expression to prefix using two string stacks
string prefix(string infix)
	{
	StringStack prefix;
	StringStack operators;

	for(int i = 0; i < (int)infix.length(); i++)
		{
		char newchar = infix[i];
		if('0' <= newchar && newchar <= '9')
			{
			prefix.push((string)""+newchar);
			}
		else
			{
			string thechar = (string)""+newchar;
			if(operators.empty())
				operators.push(thechar);
			else if(thechar == "(")
				operators.push(thechar);
			else if(thechar == ")")
				{
				while(peek(operators) != "(")
					{
					string a = operators.pop();
					string b = prefix.pop();
					string c = prefix.pop();
					string cb = c+b;
					string acb = a+cb;
					prefix.push(acb);
					}
				operators.pop();
				}
			else
				{
				while(leftFirst(peek(operators), thechar))
					{
					string a = operators.pop();
					string b = prefix.pop();
					string c = prefix.pop();
					string cb = c+b;
					string acb = a+cb;
					prefix.push(acb);
					}
				operators.push(thechar);
				}
			}
		}
	while(!operators.empty())
		{
					string a = operators.pop();
					string b = prefix.pop();
					string c = prefix.pop();
					string cb = c+b;
					string acb = a+cb;
					prefix.push(acb);
		}
	return prefix.pop();
	}


//checks to see which of two operator characters is of higher order
bool leftFirst(string a, string b)
	{
	if(a == "#")
		return false;
	if( a == "^" && b == "^")
		return false;
	else if(rank(a) >= rank(b))
		return true;
	return false;
	}

//gives rank to two operator characters, used by leftFirst
int rank(string c)
	{
	if(c == "+" || c == "-")
		return 1;
	else if(c == "*" || c == "/")
		return 2;
	else if(c == "^")
		return 3;
	return 0;
	}

//Peek on a stringstack implemented using empty, pop, and push
string peek(StringStack &st)
	{
	string ret = "#";
	if(!st.empty())
		{
		ret = st.pop();
		st.push(ret);
		}
	return ret;
	}











