//CS222 Program 4, Binary search tree with delete
//Shawn O'Neil
#include <iostream>
#include <string>
#include "tree1.h"
using namespace std;

#define EMPTYTREE 1
#define DUPLICATE 2
#define NOMATCH 3
#define OUTRANGE 4
#define NONONZERO 5

//tree constructor
Tree::Tree()
	{
	root = NULL;
	}

//tree destructor
Tree::~Tree()
	{
	delete root;
	}

//adds a node to the tree
void Tree::add(string name)
	{
	if(root == NULL)
		{
		root = new Node();
		root->setname(name);
		root->setparent(NULL);
		}
	else
		root->add(name);
	}

//sets a grade for the node of thename
void Tree::grade(int number, double score, string thename)
	{
	if(number != 1 && number != 2 && number != 3 && number != 4 && number != 5)
		throw OUTRANGE;
	if(score < 0)
		throw OUTRANGE;
	else if(root != NULL)
		root->grade(number, score, thename);
	else
		throw EMPTYTREE;
	}

//prints the tree
void Tree::print()
	{
	if(root != NULL)
		root->print();
	else
		throw EMPTYTREE;
	}

//deletes a node from the tree, with the name of name
void Tree::del(string name)
	{
	if(root != NULL)
		root->del(name, root);
	else
		throw EMPTYTREE;
	}

//gets the mean of all the nonzero particular exams in the tree
double Tree::mean(int exam)
	{
	if(exam != 1 && exam != 2 && exam != 3 && exam != 4 && exam != 5)
		throw OUTRANGE;
	else if(root != NULL)
		{
		double total =  root->gettotal(exam);
		double number = root->getnumber(exam);
		if(number != 0)
			return total/number;
		else
			throw NONONZERO;
		}
	else
		throw EMPTYTREE;
	}

//checks to see if the tree is empty. dont think its actually used...
bool Tree::empty()
	{
	return root == NULL;
	}

//node constructor
Node::Node()
	{
	parent = left = right = NULL;
	grade1 = grade2 = grade3 = grade4 = grade5 = 0;
	}

//node destructor
Node::~Node()
	{
	if(left != NULL)
		delete left;
	if(right != NULL)
		delete right;
	//cout << "destructing: " << name << endl;
	}

//adds a name to the tree
void Node::add(string thename)
	{
	if(name != thename)
		{
		if(thename < name)
			{
			if(left != NULL)
				left->add(thename);
			else
				{
				left = new Node();
				left->setparent(this);
				left->setname(thename);
				}
			}
		else
			{
			if(right != NULL)
				right->add(thename);
			else
				{
				right = new Node();
				right->setparent(this);
				right->setname(thename);
				}
			}
		}
	else
		throw DUPLICATE;
	}

//sets the node n as a child of the current node
void Node::resetchild(Node *n)
	{
	string thename = n->getname();
	n->setparent(this);
	if(thename < name)
		left = n;
	else
		right = n;
	}

//sets the child with the name thename to null. used when deleting a node
void Node::setchildtonull(string thename)
	{
	//cout << "setting " << thename << " to null. left is " << endl;// left->getname() << " right is " << right->getname() << endl;
	if(left != NULL)
		if(left->getname() == thename)
			left = NULL;
	if(right != NULL)
		if(right->getname() == thename)
			right = NULL;
	}

//returns the name
string Node::getname()
	{
	return name;
	}

//returns a particular grade
double Node::getgrade(int number)
	{
	if(number == 1)
		return grade1;
	else if(number == 2)
		return grade2;
	else if(number == 3)
		return grade3;
	else if(number == 4)
		return grade4;
	else
		return grade5;

	}

//gets total number of nodes with nonzero grades from this point down
double Node::getnumber(int exam)
	{
	double total = 0;
	if(exam == 1 && grade1 != 0)
		total += 1;
	else if(exam == 2 && grade2 != 0)
		total += 1;
	else if(exam == 3 && grade3 != 0)
		total += 1;
	else if(exam == 4 && grade4 != 0)
		total += 1;
	else if(exam == 5 && grade5 != 0)
		total += 1;
	if(left != NULL)
		total = total + left->getnumber(exam);
	if(right != NULL)
		total = total + right->getnumber(exam);
	return total;
	}

//gets total of the grades for exam number exam from this point down
double Node::gettotal(int exam)
	{
	double mytotal = 0;
	if(exam == 1)
		mytotal = mytotal + grade1;
	else if(exam == 2)
		mytotal = mytotal + grade2;
	else if(exam == 3)
		mytotal = mytotal + grade3;
	else if(exam == 4)
		mytotal = mytotal + grade4;
	else if(exam == 5)
		mytotal = mytotal + grade5;
	if(left != NULL)
		mytotal = mytotal + left->gettotal(exam);
	if(right != NULL)
		mytotal = mytotal + right->gettotal(exam);
	return mytotal;
	}

//this is used to get the immediate successor of a node, short version used by delete
Node * Node::slideleft()
	{
	if(left == NULL)
		return this;
	else
		return left->slideleft();
	}

//deletes a node from the tree. if the node we want to delete is the parent,
//then it usees *&root  to set the root of the tree
void Node::del(string thename, Node *&root)
	{
	if(name == thename)
		{
		if(left == NULL && right == NULL)
			{
			if(parent != NULL)
				{
				parent->setchildtonull(name);
				}
			else
				root = NULL;
			delete this;
			}
		else if(left == NULL)
			{
			if(parent != NULL)
				{
				Node *q = parent;
				q->resetchild(right);
				}
			else
				{
				root = right;
				}
			right = NULL;
			delete this;
			}
		else if(right == NULL)
			{
			if(parent != NULL)
				{
				Node *q = parent;
				q->resetchild(left);
				}
			else
				{
				root = left;
				}
			left = NULL;
			delete this;
			}
		else
			{
			Node *p = right->slideleft();
			name = p->getname();
			grade1 = p->getgrade(1);
			grade2 = p->getgrade(2);
			grade3 = p->getgrade(3);
			grade4 = p->getgrade(4);
			grade5 = p->getgrade(5);
			p->del(p->getname(),root);
			}
		}
	else
		{
		if(thename < name)
			{
			if(left == NULL)
				throw NOMATCH;
			else
				left->del(thename, root);
			}
		else
			{
			if(right == NULL)
				throw NOMATCH;
			else
				right->del(thename, root);
			}
		}
	}

//sets the parent node
void Node::setparent(Node *n)
	{
	parent = n;
	}

//sets the name, duh
void Node::setname(string thename)
	{
	name = thename;
	}

//Returns the mean of all the nonzero scores on a particular test from this point down
double Node::mean(int exam)
	{
	double leftmean = 0;
	double rightmean = 0;
	double memean = 0;

	if(exam == 1)
		memean = grade1;
	else if(exam == 2)
		memean = grade2;
	else if(exam == 3)
		memean = grade3;
	else if(exam == 4)
		memean = grade4;
	else if(exam == 5)
		memean = grade5;

	if(right != NULL)
		rightmean = right->mean(exam);
	if(left != NULL)
		leftmean = left->mean(exam);

	int count = 0;
	if(leftmean != 0)
		count++;
	if(rightmean != 0)
		count++;
	if(memean != 0)
		count++;

	if(count == 0)
		return 0;
	return (leftmean+rightmean+memean)/count;
	}

// Sets the grade for a particular test for the node.
void Node::grade(int number, double score, string thename)
	{
	if(name == thename)
		{
		if(number == 1)
			grade1 = score;
		else if(number == 2)
			grade2 = score;
		else if(number == 3)
			grade3 = score;
		else if(number == 4)
			grade4 = score;
		else if(number == 5)
			grade5 = score;
		}
	else if(thename < name)
		{
		if(left != NULL)
			left->grade(number, score, thename);
		else
			throw NOMATCH;
		}
	else
		{
		if(right != NULL)
			right->grade(number, score, thename);
		else
			throw NOMATCH;
		}
	}

//Print method for the node, inorder. Prints name, and grades.
void Node::print()
	{
	if(left != NULL)
		left->print();
	cout << name << " : " << grade1 << " , " << grade2 << " , " << grade3 << " , " << grade4 << " , " << grade5 << endl;
	if(right != NULL)
		right->print();
	}

int mainf(int argc, char ** argv)
	{
	cout << "Happy birthday euclid." << endl;
	Tree t;
	string action;
	int number;
	double grade;
	string name;
	while(cin >> action, cin)
		{
		cin.ignore();
		if(action == "ADD")
			{
			getline(cin, name);
			try
				{
				t.add(name);
				cout << "Successfully added " << name << "." << endl;
				cout << endl;
				}
			catch(int e)
				{
				if(e == NOMATCH)
					cout << "Could not add, ERROR" << endl;
				else if(e == EMPTYTREE)
					cout << "Could nto add, ERROR" << endl;
				else if(e == DUPLICATE)
					cout << "Could not add " << name << ". Name already exists." << endl;
				else if(e == OUTRANGE)
					cout << "Could not add, ERROR" << endl;
				cout << endl;
				}
			}

		else if(action == "PRINT")
			{
			try
				{
			//	cout << endl;
				cout << "Statistics: " << endl;
				t.print();
				cout << endl;
				}
			catch(int e)
				{
				if(e == NOMATCH)
					cout << "Could not print, ERROR" << endl;
				else if(e == EMPTYTREE)
					cout << "Database Empty, could not print." << endl;
				else if(e == DUPLICATE)
					cout << "Could not print, ERROR" << endl;
				else if(e == OUTRANGE)
					cout << "Could not print, ERROR" << endl;
				cout << endl;
				}
			}

		else if(action == "GRADE")
			{
			cin >> number;
			cin.ignore();
			cin >> grade;
			cin.ignore();
			getline(cin, name);
			try
				{
				t.grade(number, grade, name);
				cout << "Set " << name << "'s grade on test " << number << " to " << grade << "." << endl;
				cout << endl;
				}
			catch(int e)
				{
				if(e == NOMATCH)
					cout << "Could not grade " << name << ", no match in database." << endl;
				else if(e == EMPTYTREE)
					cout << "Could not grade " << name << ", database empty" << endl;
				else if(e == DUPLICATE)
					cout << "Could not grade, ERROR" << endl;
				else if(e == OUTRANGE)
					cout << "Could not grade " << name << ", test number or grade out of range" << endl;
				cout << endl;
				}
			}

		else if(action == "DELETE")
			{
			getline(cin, name);
			try
				{
				t.del(name);
				cout << "Successfully deleted " << name << "." << endl;
				cout << endl;
				}
			catch(int e)
				{
				if(e == NOMATCH)
					cout << "Could not delete " << name << ", no match in database." << endl;
				else if(e == EMPTYTREE)
					cout << "Could not delete " << name << ", database empty" << endl;
				else if(e == DUPLICATE)
					cout << "Could not delete, ERROR" << endl;
				else if(e == OUTRANGE)
					cout << "Could not delete " << name << ", test number out of range ERROR" << endl;
				cout << endl;
				}
			}

		else if(action == "MEAN")
			{
			cin >> number;
			try
				{
				double mean = t.mean(number);
				if(mean != 0)
					cout << "The mean on test " << number << " is " << t.mean(number) << endl;
				else
					cout << "There are no nonzero means in the database for test " << number << endl;
				cout << endl;
				}
			catch(int e)
				{
				if(e == NOMATCH)
					cout << "Could not get mean for test " << number << ", no match in database ERROR" << endl;
				else if(e == EMPTYTREE)
					cout << "Could not get mean for test " << number << ", database empty" << endl;
				else if(e == DUPLICATE)
					cout << "Could not get mean, ERROR" << endl;
				else if(e == OUTRANGE)
					cout << "Could not get mean for test " << number << ", test number out of range." << endl;
				else if(e == NONONZERO)
					cout << "Could not get mean for test " << number << ", no nonzero grades in database." << endl;
				cout << endl;
				}
			}

		}
	cout << "Bye, thanks for using." << endl;
	}
